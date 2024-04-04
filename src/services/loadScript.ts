type THandler = (this: GlobalEventHandlers, ev: Event) => any

export const loadScript = (
  src: string,
  onLoad: THandler | null = null,
  onError: OnErrorEventHandler | null = null,
) => {
  const scriptElement = document.createElement("script");

  scriptElement.src = src;
  scriptElement.type = "text/javascript";

  if (onLoad) {
    scriptElement.addEventListener("load", onLoad);
  }

  if (onError) {
    scriptElement.addEventListener("error", onError);
  }

  if (!document.querySelector(`[src$="${src}"]`)) {
    document.head.append(scriptElement);
  }
};