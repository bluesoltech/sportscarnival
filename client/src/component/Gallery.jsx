import React from 'react'
import gallery1 from '../assets/img/gallery1.jfif'
import gallery2 from '../assets/img/gallery2.jfif'
import gallery3 from '../assets/img/gallery3.jfif'
import gallery4 from '../assets/img/gallery4.jfif'
import gallery5 from '../assets/img/gallery5.jfif'
import gallery6 from '../assets/img/gallery6.jfif'
import gallery7 from '../assets/img/gallery7.jfif'
import gallery8 from '../assets/img/gallery8.jfif'
import gallery9 from '../assets/img/gallery9.jfif'


const Gallery = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-[120px]">
                <div>
                    <img
                        className="h-full max-w-full rounded-lg object-cover object-center m-auto"
                        src={gallery1}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center m-auto "
                        src={gallery2}
                        alt="gallery-photo"
                    />
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center mt-[100px] m-[6px] "
                        src={gallery3}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center m-auto"
                        src={gallery4}
                        alt="gallery-photo"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                <div>
                    <img
                        className="h-full max-w-full rounded-lg object-cover object-center mx-auto my-2"
                        src={gallery5}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                        className="h-full max-w-full rounded-lg object-cover object-center mx-auto my-2"
                        src={gallery6}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                        className="h-full max-w-full rounded-lg object-cover object-center mx-auto my-2"
                        src={gallery7}
                        alt="gallery-photo"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 mt-2">
                <div>
                    <img
                        className="h-full max-w-full rounded-lg object-cover object-center mx-auto my-2"
                        src={gallery8}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                        className="h-full max-w-full rounded-lg object-cover object-center mx-auto my-2"
                        src={gallery9}
                        alt="gallery-photo"
                    />
                </div>
            </div>
        </>
    )
}

export default Gallery