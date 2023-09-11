import React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Disclaimer() {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
        <Typography>Disclaimer</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <div style={{ fontWeight: "bold" }}>1. General Information</div>
          <div>
            This Website (“https://www.doseschedule.com“) is intended for general informational purposes only and should not be considered a
            substitute for professional medical advice, diagnosis, or treatment.
          </div>
          <br />
          <div style={{ fontWeight: "bold" }}>2. Non-Professional Status</div>
          <div>This Website is not authored by a medical professional.</div>
          <br />
          <div style={{ fontWeight: "bold" }}>3. No Warranties and "As Is"</div>
          <div>
            The information on this Website is provided 'as is' without any warranties, express or implied. We make no representations or warranties
            of any kind regarding the accuracy, completeness, suitability, or availability of the information contained on this Website for any
            purpose.
          </div>
          <br />
          <div style={{ fontWeight: "bold" }}>4. Accuracy and Responsibility</div>
          <div>
            While we strive to provide accurate and up-to-date information, we do not guarantee the accuracy, timeliness, or completeness of the
            content on this Website. The information may be subject to change without notice. The information on this Website may be incorrect. Users
            of this Website are responsible for verifying the information provided and should not solely rely on the content presented here. Any
            action taken based on the information found on this Website is at your own risk.
          </div>
          <br />
          <div style={{ fontWeight: "bold" }}>5. Professional Advice</div>
          <div>
            The information on this Website is not a substitute for professional advice. Always seek the guidance of your physician or another
            qualified healthcare provider for any questions you may have regarding a medical condition or treatment. Consult with qualified
            professionals, such as medical practitioners, legal experts, or financial advisors, for specific guidance related to your individual
            circumstances.
          </div>
          <br />
          <div style={{ fontWeight: "bold" }}>6. External Links</div>
          <div>
            This Website may contain links to external websites or resources. We do not endorse, control, or take responsibility for the content,
            products, services, or practices of any third-party websites linked from this Website.
          </div>
          <br />
          <div style={{ fontWeight: "bold" }}>7. Limitation of Liability</div>
          <div>
            By using this Website, you acknowledge and agree that you do so at your own risk. We are not liable for any direct, indirect, incidental,
            consequential, or punitive damages resulting from your access to or use of this Website. This includes but is not limited to injuries,
            infections, medical malpractice, death, adverse drug reactions, allergic reactions, misinterpretation of information, reliance on outdated
            medical practices, treatment errors, data breaches, loss of personal information, unauthorized access, and any other potential harm or
            damages. The potential risks are extensive and diverse, and you should exercise caution and consider seeking professional medical advice
            and guidance.
          </div>
          <br />
          <div style={{ fontWeight: "bold" }}>8. Changes to Terms of Use</div>
          <div>
            We reserve the right to modify, amend, or change this Website or disclaimer at any time without prior notice. Your continued use of this
            Website after any modifications, amendments, or changes will signify your acceptance of the updated disclaimer.
          </div>
          <br />
          <div style={{ fontWeight: "bold" }}>9. Severability</div>
          <div>
            In the event that any part of this disclaimer is determined to be illegal, invalid, or unenforceable by a court of competent jurisdiction,
            the remaining provisions of this disclaimer will continue to be in full force and effect. The unenforceable portion will not affect the
            validity or enforceability of the remaining provisions.
          </div>
          <br />
          <div style={{ fontWeight: "bold" }}>10. Acknowledgment and Agreement</div>
          <div>
            By using this Website, you acknowledge that you have read, understood, and agreed to the terms of this disclaimer. If you do not agree to
            these terms, please do not use this Website.
          </div>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Disclaimer;
