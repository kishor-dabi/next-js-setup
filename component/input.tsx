

let renderError = ({ error, touched }: any) => {

  if (error && touched) {
    return (<div className="invalid-feedback"> {error} </div>)
  }
  return ''
}

export const RenderTextField = ({ input, label, name, type, meta }: any) => {

  const error = renderError(meta) !== '' ? true : false
  return (<div>
    <label>{label}</label>
    <div className='form-group'>

      <input variant="outlined" className={ `form-control ${error ? 'is-invalid' : ''} `} error={renderError(meta) === '' ? 'false' : 'true'} id="standard-error-helper-text" 
        {...input}  label={label} 
      />
      {/* helperText={renderError(meta)} */}
      {renderError(meta)}
      <br />
      {/* 
      <TextField type={type} 
          required fullWidth 
          helperText={renderError(meta)} 
          error={renderError(meta) !== ''}
          id="" 
          label={label}  variant="standard"
          /> */}
          {/* defaultValue="Hello World" */}
      {/* <input  className={meta.touched && meta.error ? 'is-invalid form-control' : 'form-control'} /> */}
      {/* {this.renderError(meta)} */}
    </div>
  </div>
  )
}