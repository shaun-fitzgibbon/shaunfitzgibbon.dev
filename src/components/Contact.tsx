import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

const Contact = ({ }: Props) => {
  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-center text-4xl font-semibold">
          I have got what you need.{" "}
          <span className="underline decoration-[#F7AB0A]">Lets Talk.</span>
        </h4>
        <div className="space-y-10">
          {/* Phone */}
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl">+27824507907</p>
          </div>
          {/* Email */}
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl">hello@shaunfitzgibbon.dev</p>
          </div>
          {/* Address */}
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl">Cape Town, South Africa</p>
          </div>
        </div>
        <form className="mx-auto flex w-fit flex-col space-y-2">
          <div className="flex space-x-2">
            <input placeholder="Name" className="contactInput" type="text" />
            <input placeholder="Email" className="contactInput" type="email" />
          </div>
          <input
            placeholder="Subject"
            className="contactInput"
            type="text"
            name=""
            id=""
          />
          <textarea placeholder="Message" className="contactInput" />
          <button
            type="submit"
            className="rounded-md bg-[#F7AB0A] py-5 px-10 text-lg font-bold text-black"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
