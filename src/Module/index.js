import React from 'react';

class Module extends React.Component {
      state = {
            userName : '',
            passWord: '',
            texta: '',
            isGoing: true,
            products: [],
            productsChecked : [],
      }

      constructor(props) {
            super(props)
            fetch('/product-list')
                  .then((response) => {
                        return response.json()
                  })
                  .then((data) => {
                        this.setState({
                              products: data.products,
                              productsChecked : data.products.map((e) => false)
                        })
                  })
      }

      handleChange = (event) => {
            debugger
            let inputField = event.target
            let name = inputField.name
            let value = inputField.type === 'checkbox' ? inputField.checked : inputField.value;
            if (name === 'productsChecked')
            {
                  let index = inputField.value
                  let productsChecked = this.state.productsChecked
                  productsChecked[index] = value
                  this.setState({
                        "productsChecked": productsChecked
                  })
            }
            else {
                  this.setState({
                        [name]: value
                  })
            }
            
            console.log(inputField, this.state);
      }

      render() {
            const  {
                  userName,
                  passWord,
                  texta,
                  products,
                  productsChecked,
            } = this.state

            
            
            return (
                  <div className="row">
                        <div className="col-md-12">
                              <form >
                                    <div>
                                          <label>
                                                User Name:
                                                <input type="text" name="userName" value={userName} onChange={this.handleChange}/>
                                          </label>
                                    </div>
                                    <div>
                                          <label>
                                                Password:
                                                <input type="password" name="passWord" value={passWord} onChange={this.handleChange}/>
                                          </label>
                                    </div>
                                    <div>
                                          <label>
                                                Text:
                                                <textarea name="texta" value={texta} onChange={this.handleChange}></textarea>
                                          </label>
                                    </div>
                                    <div>
                                          <label>
                                                Is going:
                                                <input
                                                      name="isGoing"
                                                      type="checkbox"
                                                      checked={this.state.isGoing}
                                                      onChange={this.handleChange} />
                                          </label>
                                    </div>
                                    {
                                          products.map((val, index) => {
                                                let tempName = `product${index}`
                                                return (
                                                      <div>
                                                            <label>
                                                                  {val}
                                                                  <input
                                                                        key={index}
                                                                        value={index}
                                                                        name='productsChecked'
                                                                        type="checkbox"
                                                                        checked={this.state.productsChecked[index]}
                                                                        onChange={this.handleChange} />
                                                            </label>
                                                      </div>
                                                )
                                          })
                                    }
                                    <div>
                                          <input type="submit" value="Submit" />
                                    </div>
                              </form>
                        </div>
                  </div>
            )
      }
}

export default Module;