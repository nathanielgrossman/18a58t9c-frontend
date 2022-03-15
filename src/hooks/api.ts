import { useCallback, useEffect, useMemo, useState } from "react";
import { getGroupURL, SCATTER_VIEW_URL } from "../utils/urlUtils";
import axios from "axios";

export const useChronologicalImages = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<Array<Image>>([]);
  const [totalImages, setTotalImages] = useState<number>(0);
  const [nextGroup, setNextGroup] = useState(0);
  const [currentGroup, setCurrentGroup] = useState<number | undefined>();

  useEffect(() => {
    const fetchImages = async () => {
      if (currentGroup === nextGroup) {
        return;
      }
      setCurrentGroup(nextGroup);
      const isFirstLoad = currentGroup === undefined;
      const url = getGroupURL(nextGroup);
      setLoading(isFirstLoad);
      const { data } = await axios.get<ImageQueryResult>(url);
      setImages(isFirstLoad ? data.images : [...images, ...data.images]);
      setTotalImages(data.total);

      setLoading(false);
    };

    fetchImages();
  }, [currentGroup, nextGroup, images]);

  const loadNextGroup = useCallback(
    () => setNextGroup(nextGroup + 1),
    [nextGroup]
  );

  return { loading, images, totalImages, loadNextGroup };
};

export const useScatterImages = () => {
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

      const { data } = await axios.get<ImageQueryResult>(SCATTER_VIEW_URL);
      setImages(data.images);
      setTotalImages(data.total);

      setLoading(false);
    };

    fetchImages();
  }, [shouldLoad]);

  const reloadImages = useCallback(() => setShouldLoad(true), []);

  return { loading, images, totalImages, reloadImages };
};

export const useImages = (chronological: boolean) => {
  const chronologicalImages = useChronologicalImages();
  const scatterImages = useScatterImages();

  const { loading, images, totalImages } = useMemo(
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

  return { images, totalImages, loading, loadNextGroup };
};
