import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import Traits from "../Traits";
import { useDisclosure } from "@nextui-org/react";
export default function HomeComp() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section
      id="welcome"
      className="container text-6xl flex "
    >
      <div className="welcome-left my-auto">
        <h3 className="opening-slide font-bold">Samuel Ou</h3>
        <div className="my-4 bio w-full">
          Software Engineer from <strong>Queens, NY</strong> <br></br>
          Delivering Creative Solutions
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
                      src="/Samuel Ou Resume.pdf"
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