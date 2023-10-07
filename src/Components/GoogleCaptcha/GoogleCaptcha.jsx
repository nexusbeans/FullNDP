import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";


export const GoogleCaptcha = () => {
  const recaptchaRef = React.useRef();

  const handleSubmit = async () => {
    const token = await recaptchaRef.current.executeAsync();

  }

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      size="invisible"
      sitekey="6LdWYp0nAAAAALpcsq5rQ-ebXRuEnpXLC4opD16p"
    />
  )
}
