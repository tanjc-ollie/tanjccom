import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LinekdinContact({ rem }: { rem: number }) {
  return (
    <a
      href="https://www.linkedin.com/in/ollietan"
      target="_blank"
      className="flex justify-center items-center align-middle"
    >
      <FontAwesomeIcon
        icon={faLinkedin}
        color="#0a66c2"
        className={`w-[${rem}rem] h-[${rem}rem]`}
      />
    </a>
  );
}
