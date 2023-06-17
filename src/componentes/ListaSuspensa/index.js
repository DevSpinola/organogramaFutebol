import "./ListaSuspensa.css";
const ListaSuspensa = ({ label, obrigatorio, itens, aoAlterado }) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select onChange={(evento) => aoAlterado(evento.target.value)} required={obrigatorio}>
        <option value=""></option>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
