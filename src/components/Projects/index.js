import React from "react"
import { ContainerWrapper, SectionTitle } from "Styles/GlobalStyles"

export default function index() {
  return (
    <>
      <ContainerWrapper>
        <SectionTitle>RECENT WORK</SectionTitle>
        <section className="overflow-hidden text-gray-700 ">
          <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
              <div className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="/images/chair.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="/images/fine-image.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="/images/pillow.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="/images/comfort.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="/images/motor.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="/images/about-chair.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ContainerWrapper>
    </>
  )
}
