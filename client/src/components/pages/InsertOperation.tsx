import React, {useState} from "react";
import "../styles/pages/insertOperation.css"

const InsertOperations: React.FC = () => {

  const [nameOperation, setNameOperation] = useState("")
  const [getValue, setGetValue] = useState();
  const [preference, setPreference] = useState(100);
  const [qttNote, setQttNote] = useState<number | undefined>();
  const [qttPackage, setQttPackage] = useState<number | undefined>();

  function handleNameOperationText(e: any){
    e.preventDefault();
    setNameOperation(e.target.value)
  }

  function handleValueText(e: any) {
    e.preventDefault();
    if(preference){
      const amountNotes = parseInt(e.target.value) / preference as number;
      const amountPackages = amountNotes / 50 as number;
      setQttNote(amountNotes);
      setQttPackage(Math.ceil(amountPackages));
    }
    setGetValue(e.target.value);
  }
  function handlePreferenceText(e: any) {
    e.preventDefault();
    if(getValue){
      const amountNotes = getValue / e.target.value as number;
      const amountPackages = amountNotes / 50 as number;
      setQttNote(amountNotes);
      setQttPackage(Math.ceil(amountPackages));
    }
    setPreference(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if(nameOperation && getValue && preference && qttNote && qttPackage){
      const rest = getValue%100;
      if(rest !== 0 ){
        console.log(rest)
        alert("A quantidade de notas deve ser multiplo de 100")
      }else{
        console.log(nameOperation, getValue, preference, qttNote, qttPackage)
      }
    }
  }

  return (
      <div className="section-insertoperation">
        <h1 className="insertoperation-title">Criar Operação</h1>
        <form className="insertoperation-form" onSubmit={handleSubmit}>
          <label className="form-label form-label-name">
              <span>Nome da Operação:</span>
              <input className="label-input" type="text" required onChange={handleNameOperationText} value={nameOperation}/>
            </label>
          <label className="form-label form-label-value">
            <span>Valor: R$</span>
            <input className="label-input label-input-value" type="text" defaultValue={getValue} required onChange={handleValueText} value={getValue}/>
          </label>
          <label className="form-label form-label-preference">
            <span>Nota:</span>
            <select  className="label-select" onChange={handlePreferenceText} required>
              <option value="100"> 100 reais</option>
              <option value="50">50 reais</option>
              <option value="10">10 reais</option>
            </select>
          </label>
          <label className="form-label form-label-quantities">
            <span>Quantidade de notas:</span>
            <input className="label-input label-input-quantities" type="text" disabled value={qttNote}/>
          </label>
          <label className="form-label form-label-packages">
            <span>Quantidade de pacotes:</span>
            <input className="label-input label-input-package" type="text" disabled value={qttPackage}/>
          </label>
          <input className="form-submit" type="submit" value="Confirmar Operação"/>
        </form>

        <div className="insertoperation-observations">
          <h3 className="observation-title">Observações</h3>
          <div  className="observation-default">- O valor tem que ser de 100 em 100. <span>Ex: R$1000, R$1100, R$1200..</span></div>
          <div  className="observation-default">- Terá somente 1 tipo de preferência de notas. <span>(R$10 / R$50 / R$100)</span></div>
          <div  className="observation-default">- Cada Pacote terá o máximo de 50 notas. Se houver mais, será dividido em subpacotes</div>
        </div>
      </div>
  );
};

export default InsertOperations;
