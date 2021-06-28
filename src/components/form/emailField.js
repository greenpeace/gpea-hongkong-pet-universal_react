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
  const { name, label, placeholder, accepter, handleOnChange, ...rest } = props;
  const [suggested, setSuggested] = useState("");
  const emailFieldRef = useRef()
  const handleEmailCheck = (email) => {
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
      />
      {suggested && <div style={{color: '#FFF', fontSize: '14px', paddingTop: '4px'}}>您是否想輸入 <u>{suggested}</u></div>}
    </FormGroup>
  );
};
export default EmailField
