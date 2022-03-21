/* eslint-disable jsx-a11y/alt-text */
import { HeroContainer, HeroElements, Button } from "Styles/GlobalStyles"

export default function Index() {
  return (
    <>
      <HeroContainer>
        <HeroElements>
          <div className="" data-aos="zoom-in">
            <img className="w-[450px]" src="/images/pillow.jpg" />
          </div>
          <div className="flex-wrap items-center justify-center w-full py-4 mt-12 text-3xl tracking-wide md:w-2/5 md:text-4xl font-millerLight md:leading-loose ">
            Full-stack web designs focused on{" "}
            <div>
              <span className=" font-millerItalic">Simplicity</span> and
              <span className=" font-millerItalic"> Function.</span>
            </div>
            <a href="#one">
              <Button>LEARN MORE</Button>
            </a>
          </div>
          {/* <img
            className="w-[450px] absolute right-8 top-2/4"
            src="/images/off-image.jpg"
          /> */}
        </HeroElements>
      </HeroContainer>
    </>
  )
}

// absolute left-0 flex flex-col justify-center w-full h-full p-4 text-3xl leading-normal tracking-normal text-gray-900 top-10 md:text-4xl font-millerLight xl:text-5xl xl:leading-normal
