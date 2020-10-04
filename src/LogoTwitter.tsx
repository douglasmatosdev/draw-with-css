import React, { RefObject } from 'react'

interface Props {
    ref?: JSX.Element
}
const LogoTwitter = React.forwardRef<SVGSVGElement, Props>((props, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.537 511.537">
        <path d="M357.038 49.172c-59.284.898-105.993 52.098-105.993 111.382v14.372C145.052 156.063 92.954 127.319 35.466 67.137c-34.133 66.47 3.593 122.161 44.912 152.702-27.846 0-51.2-3.593-69.165-19.761-1.796-.898-3.593 0-2.695 1.797 15.27 55.691 67.368 96.112 107.789 107.789-36.828 0-61.081 5.389-87.13-10.779-1.796-.898-3.593 0-2.695 1.796 19.761 54.793 59.284 71.86 116.772 71.86-28.744 21.558-67.368 43.116-140.126 44.912-2.695 0-4.491 3.593-1.796 5.389 26.947 22.456 93.418 39.523 186.835 39.523 153.6 0 278.456-136.533 278.456-305.404v-8.982c24.253-8.982 37.726-30.54 44.912-52.098 0-.898-.898-1.796-1.797-1.796l-51.2 17.965c-.898 0-1.796-1.796-.898-2.695 21.56-17.067 37.728-38.625 44.914-59.285 0 0-.898-.898-1.797-.898-24.253 9.881-47.607 19.761-65.572 25.151-2.695.898-6.288.898-8.982-.898-11.677-6.288-46.709-24.253-69.165-24.253" />
    </svg>
)) 

export default LogoTwitter
