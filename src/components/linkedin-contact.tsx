import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LinekdinContact() {
  return (
    <a
      href="https://www.linkedin.com/in/ollietan"
      target="_blank"
      className="flex justify-center items-center align-middle"
    >
      <FontAwesomeIcon icon={faLinkedin} color="#0a66c2" size="xl" />
    </a>
  );
}
