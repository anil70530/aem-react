import React, { Component } from 'react';
import { ProductCard } from '../product/ProductCard';
import "./pagination.scss"

export default class Pagination extends Component {

    constructor(props) {
        super();
        this.state = {
            sort:"asc",
            searchItem: "",
            productData: [],
            currentPage: 1,
            todosPerPage: 12
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.setState({
            sort:this.props.sort,
            productData:this.props.data
        })
    }
    componentDidUpdate(prevProps,prevState){
          if(prevProps.search!==this.props.search){
            this.setState({
                searchItem:this.props.search,
                productData:this.props.data.filter((res) => res.category?.toLowerCase().includes(this.props.search?.toLowerCase())).map(res => res),
                currentPage:1
              })
          }
          
          if((prevProps.data.length!==this.props.data.length) ||  (prevState.productData.length!== this.state.productData.length) || (this.props.sort!==this.state.sort)){
            if(this.state.searchItem===""){
                this.setState({
                    sort:this.props.sort,
                    productData:this.props.data
                })
            }
           
          }
        
    }
   
    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
   
    render() {
        const { productData, currentPage, todosPerPage } = this.state;
                  
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = productData.slice(indexOfFirstTodo, indexOfLastTodo);
        const renderTodos = currentTodos.map((todo, idx) => {
            return <ProductCard key={idx} detail={todo}></ProductCard>;
        });
      
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(productData.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });
        return (
            <>
                <div className="gallery">
                    <div className="gallery-items">
                        {renderTodos}
                    </div>
                </div>
                <div className='pagenation'>
                    <ul id="page-numbers">
                        {renderPageNumbers}
                    </ul>
                </div>

            </>
        )
    }
}
