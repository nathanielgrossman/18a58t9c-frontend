import { useCallback, useEffect, useMemo, useState } from "react";
import { getGroupURL, SCATTER_VIEW_URL, UPDATE_VIEWS_URL } from "./urlUtils";
import axios from "axios";

export const useChronologicalImages = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<Array<Image>>([]);
  const [totalImages, setTotalImages] = useState<number>(0);
  const [group, setGroup] = useState<number>(0);

  useEffect(() => {
    const fetchImages = async () => {
      const isFirstLoad = group === 0;
      const url = getGroupURL(group);
      setLoading(isFirstLoad);

      try {
        const { data } = await axios.get<ImageQueryResult>(url);
        setImages((curent) =>
          isFirstLoad ? data.images : [...curent, ...data.images]
        );
        setTotalImages(data.total);
      } catch (error) {
        setError(true);
      }

      setLoading(false);
    };

    fetchImages();
  }, [group]);

  const loadNextGroup = useCallback(() => setGroup((g) => g + 1), []);

  return { loading, error, images, totalImages, loadNextGroup };
};

export const useScatterImages = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<Array<Image>>([]);
  const [totalImages, setTotalImages] = useState<number>(0);
  const [shouldLoad, setShouldLoad] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      if (!shouldLoad) {
        return;
      }
      setShouldLoad(false);
      setLoading(true);

      try {
        const { data } = await axios.get<ImageQueryResult>(SCATTER_VIEW_URL);
        setImages(data.images);
        setTotalImages(data.total);
      } catch (error) {
        setError(true);
      }

      setLoading(false);
    };

    fetchImages();
  }, [shouldLoad]);

  const reloadImages = useCallback(() => setShouldLoad(true), []);

  return { loading, error, images, totalImages, reloadImages };
};

export const useImages = (chronological: boolean) => {
  const chronologicalImages = useChronologicalImages();
  const scatterImages = useScatterImages();

  const { loading, error, images, totalImages } = useMemo(
    () => (chronological ? chronologicalImages : scatterImages),
    [chronologicalImages, scatterImages, chronological]
  );

  const { loadNextGroup } = chronologicalImages;
  const { reloadImages } = scatterImages;

  useEffect(() => {
    if (chronological) {
      reloadImages();
    }
  }, [chronological]);

  return { images, totalImages, loading, error, loadNextGroup };
};

export const trackImageView = (id: string) => {
  try {
    axios.post(UPDATE_VIEWS_URL, { id: id });
  } catch (error) {
    // do nothing
  }
};
