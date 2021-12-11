import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/navbar.css";
import "../styles/hero.css";
import "../styles/content.css";
import "../styles/footer.css";
import "../styles/card.css";
import "../scripts/components/card";
import { changeColor, navbar } from "./navbar";

navbar();
changeColor();

