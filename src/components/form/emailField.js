import React, {useState, useRef} from "react";
import { FormGroup, FormControl, ControlLabel } from "rsuite";
import Mailcheck from "mailcheck";
// for email correctness
let domains = [
  "me.com",
  "outlook.com",
  "netvigator.com",
  "cloud.com",
  "live.hk",
  "msn.com",
  "gmail.com",
  "hotmail.com",
  "ymail.com",
  "yahoo.com",
  "yahoo.com.tw",
  "yahoo.com.hk",
];
let topLevelDomains = ["com", "net", "org"];

const EmailField = (props) => {
  const { name, label, placeholder, accepter, handleOnChange, _form, ...rest } = props;
  const [suggested, setSuggested] = useState("");
  const [_email, _setEmail] = useState("");
  const emailFieldRef = useRef()
  const handleEmailCheck = (email) => {
    _setEmail(email)
    if(email===suggested){
      setSuggested("")
    }
    Mailcheck.run({
      email: email,
      domains: domains,
      topLevelDomains: topLevelDomains,
      suggested: function(suggestion) {
        if(email !== suggestion.domain){
          setSuggested(`${suggestion.full}`)
        } else {
          setSuggested("")
        }
      }
    })
  }

  const handleSuggestionClick = () => {
    _form.current?.handleFieldChange('Email', suggested)
    _setEmail(suggested)
  }
  
  return (
    <FormGroup>
      {label && <ControlLabel>{label} </ControlLabel>}
      <FormControl
        name={name}
        accepter={accepter}
        placeholder={placeholder}
        {...rest}
        checkTrigger={"blur"}
        onChange={(v)=>{
          handleEmailCheck(v)
        }}
        ref={emailFieldRef}
        value={_email}
      />
      {suggested && <div style={{color: '#FFF', fontSize: '14px', paddingTop: '4px'}} onClick={()=>handleSuggestionClick()}>您是否想輸入 <u>{suggested}</u></div>}
    </FormGroup>
  );
};
export default EmailField
