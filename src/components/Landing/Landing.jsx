import React from "react";
import style from "./Landing.module.css";
import img from "../../Imgs/HenryBank.png";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AddCardIcon from "@mui/icons-material/AddCard";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import DownloadIcon from "@mui/icons-material/Download";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.background}>
      <div className={style.nav}>
        <div className={style.containerNav}>
          <h1 className={style.text1}>Henry</h1>
          <h1 className={style.text2}>Bank</h1>
        </div>
        {/* <h1 className={style.text3}>Sobre HenryBank</h1> */}
        {/* <button className={style.btn}>Nosotros</button> */}
        <Link to="/Nosotros" style={{ textDecoration: "inherit" }}>
          <h1 className={style.text3}>Sobre Nosotros</h1>
        </Link>
      </div>
      <div className={style.componentsMain}>
        <div className={style.components}>
          <div>
            <h1 className={style.textMain}>El lado bueno</h1>
          </div>
          <div className={style.cont}>
            <img className={style.image} src={img} alt="HenryBank"></img>
          </div>
          <h1 className={style.textMain2}>de tu plata....</h1>
        </div>
        <button className={style.btn2}>Descarga la app</button>
      </div>
      <div className={style.componentsMain2}>
        <div className={style.title}>
          <h1 className={style.textTitle}>Mirá todo lo que podés hacer con</h1>
          <h1 className={style.textTitle2}>Henry</h1>
          <h1 className={style.textTitle2}> Bank</h1>
        </div>
        <div className={style.container2}>
          <div className={style.options}>
            <div>
              <div className={style.containerText}>
                <h1 className={style.textSubtile}>Invertí en Plazos fijos para ganar dinero</h1>
              </div>
              <div className={style.containerDown}>
                <AttachMoneyIcon
                  style={{ color: "#00a2ff", width: 100, height: 100 }}
                ></AttachMoneyIcon>
                <h2 className={style.description}>
                  Podes invertir en distintos plazos fijos de una manera Fácil y Segura, con una ganancia del 5%. 
                </h2>
              </div>
            </div>
          </div>
          <div className={style.options}>
            <div className={style.containerText}>
              <h1 className={style.textSubtile}>Invertí en cryptos</h1>
              <h1 className={style.textSubtile}>y activa tu capital</h1>
            </div>
            <div className={style.containerDown}>
              <div className={style.img1}>
                <CurrencyBitcoinIcon
                  style={{ color: "#00a2ff", width: 100, height: 100 }}
                ></CurrencyBitcoinIcon>
              </div>
              <h2 className={style.description}>
                Podes invertir en diferentes criptomonedas como el Bitcoin, Etherium, USDT, etc.
              </h2>
            </div>
          </div>
          <div className={style.options}>
            <div className={style.containerText}>
              <h1 className={style.textSubtile}>Protegé lo que más</h1>
              <h1 className={style.textSubtile}>quieres</h1>
            </div>
            <div className={style.containerDown}>
              <VerifiedUserIcon
                style={{ color: "#00a2ff", width: 100, height: 100 }}
              ></VerifiedUserIcon>
              <h2 className={style.description}>
             Henry Bank ofrece una seguridad diferente a muchas apps, cuenta con contraseñas encriptadas, validaciones de emails, etc.
              </h2>
            </div>
          </div>
          <div className={style.options}>
            <div className={style.containerText}>
              <h1 className={style.textSubtile}>Transferí a personas y </h1>
              <h1 className={style.textSubtile}>agregalos a tus contactos</h1>
            </div>
            <div className={style.containerDown}>
              <PublishedWithChangesIcon
                style={{ color: "#00a2ff", width: 100, height: 100 }}
              ></PublishedWithChangesIcon>
              <h2 className={style.description}>
              Henry Bank cuenta con un apartado para guardar contactos y poder realizar una transferencia mas Simple y Rápida.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className={style.containerMain3}>
        <div className={style.title}>
          <h1 className={style.textTitle}>¿Comó ser parte de </h1>
          <h1 className={style.textTitle2}>Henry</h1>
          <h1 className={style.textTitle2}> Bank?</h1>
        </div>
        <div className={style.containerSteps}>
          <div className={style.containerStepsBox}>
            <div className={style.containerStepsIcon}>
              <h1>01.</h1>
              <DownloadIcon
                style={{ color: "#6804c5", width: 100, height: 100 }}
              ></DownloadIcon>
            </div>
            <h2>Descargá la app</h2>
          </div>
          <div className={style.containerStepsBox}>
            <div className={style.containerStepsIcon}>
              <h1>02.</h1>
              <AppRegistrationIcon
                style={{ color: "#6804c5", width: 100, height: 100 }}
              ></AppRegistrationIcon>
            </div>
            <h2>Completá el registro con tus datos</h2>
          </div>
          <div className={style.containerStepsBox}>
            <div className={style.containerStepsIcon}>
              <h1>03.</h1>
              <MobileFriendlyIcon
                style={{ color: "#6804c5", width: 100, height: 100 }}
              ></MobileFriendlyIcon>
            </div>
            <h2>Disfruta de tener un banco en tu celular</h2>
          </div>
        </div>
        <div className={style.title}>
          <h1 className={style.textTitle}>Cargá saldo para usar </h1>
          <h1 className={style.textTitle3}>Henry</h1>
          <h1 className={style.textTitle3}> Bank</h1>
        </div>
        <div className={style.componentMethods}>
          <div className={style.methodsMoney}>
            <CardGiftcardIcon
              style={{ color: "#00a2ff", width: 100, height: 100 }}
            ></CardGiftcardIcon>
            <h2 className={style.methodsText}>Transferencias CBU/CVU</h2>
          </div>
          <div className={style.methodsMoney}>
            <AddCardIcon
              style={{ color: "#00a2ff", width: 100, height: 100 }}
            ></AddCardIcon>
            <h2 className={style.methodsText}>Carga dinero con tarjeta</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
