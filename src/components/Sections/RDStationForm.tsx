import React, { useEffect } from "react";

declare global {
  interface Window {
    RDStationForms: {
      new (id: string, token: string | null): {
        createForm: () => void;
      };
    };
  }
}

const RDStationForm = () => {
  useEffect(() => {
    // Função para inicializar o formulário
    const initializeForm = () => {
      if (window.RDStationForms) {
        // Evita inicializar o mesmo formulário mais de uma vez
        const formContainer = document.getElementById(
          "landing-page-consultoria-gratuita-dfe5b696a9d002561a96"
        );
        if (formContainer && !formContainer.hasChildNodes()) {
          new window.RDStationForms(
            "landing-page-consultoria-gratuita-dfe5b696a9d002561a96",
            null
          ).createForm();
        }
      }
    };

    // Verifica se o script já foi carregado
    const scriptId = "rd-station-forms-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        initializeForm();
      };
    } else {
      initializeForm();
    }
  }, []);

  return (
    <div className="max-w-[1000px] mx-auto my-32 px-6">
      {/* Div onde o RD Station Forms será inserido */}
      <div
        role="main"
        id="landing-page-consultoria-gratuita-dfe5b696a9d002561a96"
      ></div>
    </div>
  );
};

export default RDStationForm;
