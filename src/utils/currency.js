const currencyFormat =(num) =>{
    if(num!==undefined &&  !isNaN(num)){
        
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }else{
        return '$' +0.00;
    }
    
 }
 export default currencyFormat;