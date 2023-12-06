// class ReactContainer extends React.Component{
//     // JSX tags
//     // JSX there should be one parent element
//       render(){
//           return (
//           <div>Hello! Welcome to Kalvium   
//              <div>This is babel</div>
//          </div> )
//       };  
//   }

function ReactContainer(){
    return (
        <div>Hello! Welcome to Kalvium   
           <div>Let's rock and roll - this is babel</div>
       </div> )
    };  


let  container = document.getElementById('react-container');
// Direclty pass the component to render
ReactDOM.render(<ReactContainer />,container);    