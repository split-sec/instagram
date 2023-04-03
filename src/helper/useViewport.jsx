import { viewportContext } from './ViewPortContext';
import { useContext } from 'react';

export const useViewport = () => {
    const { width, height } = useContext(viewportContext);
    console.log("Inside useViewport: ", width);
    return { width, height };
}
  