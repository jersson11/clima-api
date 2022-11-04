import React from 'react';


const WeatherForm = props => (
    <div className="card card-boy, diseño ">
        <form onSubmit={props.getWeather}> <br/>
            <div className="form-group letra">
            <label >seleccione alguna ciudad a consultar </label>
            </div>

            <div className='select'>
            <select name="city" class="form-select" aria-label="Default select example">
  <option selected>seleccione la ciudad que desea consultar </option>
  <option value="bogota">bogota</option>
  <option value="cali">cali</option>
  <option value="girardot">girardot</option>
  <option value="caracas">caracas</option>
  <option value="paris">paris</option>
  <option value="lima">lima</option>
  <option value="tunja">tunja</option>
  <option value="duitma">duitama</option>
  <option value="londres">londres</option>
</select>
</div>

<div className='select'>
            <select className='select' name="country" class="form-select" aria-label="Default select example">
            <option selected>seleccione el pais de la ciudad que desea consultar </option>
  <option value="colombia">Colombia</option>
  <option value="venezuela">Venezuela</option>
  <option value="inglaterra">Inglaterra</option>
  <option value="francia">Francia</option>
  <option value="estados unidos">Estados unidos</option>
  <option value="peru">peru</option>
</select>
</div>

            <button className="btn btn-success btn-block">
                consulte el clima
            </button>
        </form>
    </div>
);

export default WeatherForm;