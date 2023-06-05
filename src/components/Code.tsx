import CodeMirror from "@uiw/react-codemirror";
import { useEffect, useState } from "react";
import { InstructionIterator} from "../core/asm/asm";
import { hex2Byte } from "../core/common/bytes";
import EVM from "../core/vm/evm";
import { Title } from "./ui/Title";

export const Code = () => {
  const [code, setCode] = useState("Push1 0x50");
  const push = () => {
    let it = new InstructionIterator(code);
    let evm = new EVM();
    evm.stateDB.create(hex2Byte('0x2020'))
    console.log(it.assemble()) 
  };


  const onCodeUpdate = (code: string) => {
    setCode(code);
  };

  return (
    <div>
      <Title> EVM Source Code </Title>
      <button onClick={push}> Push</button>
      <CodeMirror
        value="Push1 0x50"
        height="calc(100vh - 90px)"
        onChange={onCodeUpdate}
      />
    </div>
  );
};
