"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import Traits from "./Traits";
import { useDisclosure } from "@nextui-org/react";
import AnimatedSection from "../Animated";
export default function HomeComp() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const name = ["S", "a", "m", "u", "e", "l", "O", "u"];
  return (
    <section
      id="welcome"
      className="container text-7xl flex pb-[140px] pt-[15px] md:pt-0"
    >
      <div className="welcome-left my-auto flex flex-col gap-3">
        {/* <h3 className="opening-slide font-bold">Samuel Ou</h3> */}
        <h3 className="flex font-bold name">
          
          {name.map((letter, i) => (
            <AnimatedSection
              effect="slide-up"
              key={i}
              className={`flex items-center mb-2 ${i == 5 && "mr-4"}`}
              delay={i * 100}
            >
              {letter}
            </AnimatedSection>
          ))}
        </h3>
        <div className="bio w-full">
          Software Engineer from <strong>Queens, NY</strong> <br></br>
          Delivering Creative and Strategic Solutions
          <Traits />
        </div>
        {/*  */}
        <span className="flex mt-3 resume">
          <Button className="resume-pop font-bold text-xl" onPress={onOpen}>
            Resume
          </Button>
          <Modal
            size="4xl"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            className="text-black"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                  <ModalBody>
                    <embed
                      src="/Samuel_Ou_Resume.pdf"
                      type="application/pdf"
                      className="m-auto w-full h-[500px] "
                    />
                  </ModalBody>
                  <ModalFooter></ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </span>
        <p className="text-sm mt-4 dark-cycle ">
          Click the logo to toggle dark mode
        </p>
      </div>
      <div className="welcome-right flex flex-col m-auto">
        <img
          src="/images/with-laptop-1.png"
          className="home-logo flex m-auto"
          alt="logo"
        />
      </div>
    </section>
  );
}
