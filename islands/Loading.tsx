import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

interface Props {
  title?: string;
  loading_item?: string;
  init?: number;
  max?: number;
  interval?: number;
}

export function Loading({
  init = 1,
  loading_item = ".",
  max = 20,
  title = "loading",
  interval = 100,
}: Props) {
  const loading = useSignal(loading_item.repeat(init));

  useEffect(() => {
    const stop = setInterval(() => {
      loading.value = loading.value.length > max
        ? loading.value = loading_item.repeat(init)
        : loading.value += loading_item;
    }, interval);

    return () => clearInterval(stop);
  }, []);

  return (
    <pre>
    {`${title}${loading}`}
    </pre>
  );
}
