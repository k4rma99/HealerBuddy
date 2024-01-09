import { createPortal } from "react-dom";
import { useState, useLayoutEffect } from "react";

// Refer logic of React Portal Wrapper
// https://blog.logrocket.com/build-modal-with-react-portals/#creating-react-portal
// https://www.youtube.com/watch?v=a92IhR92aEY

function createWrapperAndAppendToBody(wrapperId: string) {
  if (!document) return null;
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

function ReactPortal({
  children,
  wrapperId = "portal-wrapper",
}: {
  children: React.ReactElement;
  wrapperId: string;
}) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }

    setWrapperElement(element!);
    // The '!' is non-null assertion operator. 
    // It is a way to tell the compiler "this expression cannot be null or undefined here, so don't complain about the possibility of 
    // it being null or undefined." Sometimes the type checker is unable to make that determination itself.

    return () => {
      // delete the programatically created element
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  // wrapperElement state will be null on the very first render.
  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
}

export default ReactPortal;
