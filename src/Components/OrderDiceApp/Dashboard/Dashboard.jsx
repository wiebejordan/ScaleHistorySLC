// import React, {Component} from 'react';
// import {Button, Grid, Modal, Image, Header, Segment, Transition, Divider} from 'semantic-ui-react';
// import '../Dashboard/Dashboard.css'

// class Dashboard extends Component {
//   constructor(props){
//     super(props)

//     this.state = {
//       totalDice: 0,
//       diceBag: [],
//       diceRemaining: 0,
//       pulledDice: '',
//       turnNum: 1,
//       playerOneTotalDice: this.props.playerOne.diceNum,
//       playerOneRemainingDice: this.props.playerOne.diceNum, 
//       playerTwoTotalDice: this.props.playerTwo.diceNum,
//       playerTwoRemainingDice: this.props.playerTwo.diceNum,
//       gameOver: false,
//       transition: true
//     }
//   }

// componentDidMount = (props) => {
//   this.handleDiceTotal()
  
 
//   console.log(this.props)
// }



// handleDiceTotal = (props) => {
//   const {diceBag, playerOneTotalDice, playerTwoTotalDice} = this.state;
//   const {playerOne, playerTwo} = this.props;

//   let totalDice = this.props.playerOne.diceNum + this.props.playerTwo.diceNum + this.props.playerThree.diceNum + this.props.playerFour.diceNum;

//   for(let i=0; i < playerOneTotalDice; i++){
//     diceBag.push(`${playerOne.diceColor}`)
//   }

//   for(let i=0; i < playerTwoTotalDice; i++){
//     diceBag.push(`${playerTwo.diceColor}`)
//   }


//   this.setState({totalDice: totalDice, diceRemaining: totalDice})
  
//   if(this.state.playerOneTotalDice === 0 || this.state.playerTwoTotalDice === 0){
//     this.setState({gameOver: true})
//   }
  
// }

// handleDiceDraw = (props) => {
//   const {diceBag} = this.state;
//   const {playerOne, playerTwo} = this.props;
//   let length = diceBag.length - 1 ;
//   let random = Math.floor(Math.random() * length);
  
//   let pulledDice = diceBag.splice(random, 1);
//   this.setState({pulledDice: pulledDice})

//   if(pulledDice == this.props.playerOne.diceColor){
//     this.setState({playerOneRemainingDice: this.state.playerOneRemainingDice -1})
//   }else if (pulledDice == this.props.playerTwo.diceColor){
//     this.setState({playerTwoRemainingDice: this.state.playerTwoRemainingDice -1})
//   }
//   this.setState((prevState) => ({ transition: !prevState.transition }))
// }

// handleRemoveP1Dice = (props) => {
//   const {diceBag} = this.state;

//   for(let i = 0; i < diceBag.length; i++){
//     if(diceBag[i] === `${this.props.playerOne.diceColor}`){
//       diceBag.splice(i,1);
//       this.setState({playerOneRemainingDice: this.state.playerOneRemainingDice -1});
//     }
//   }
// }

// handleRemoveP2Dice = (props) => {
//   const {diceBag} = this.state;

//   for(let i = 0; i < diceBag.length; i++){
//     if(diceBag[i] === `${this.props.playerTwo.diceColor}`){
//       diceBag.splice(i,1);
//       this.setState({playerTwoRemainingDice: this.state.playerTwoRemainingDice -1});
//     }
//   }
// }

// handleP1DiBDestroyed = () => {
//   const {diceBag, playerOneTotalDice, playerOneRemainingDice} = this.state;

//   for(let i = 0; i < diceBag.length; i++){
//     if(diceBag[i] === `${this.props.playerOne.diceColor}`){
//       diceBag.splice(i,1);
//       this.setState({playerOneRemainingDice: this.state.playerOneRemainingDice -1});
//     }
//   }
  
//   if(playerOneTotalDice >0){
//   this.setState({playerOneTotalDice: playerOneTotalDice - 1, playerOneRemainingDice: playerOneRemainingDice - 1});
//   }
// }

// handleP1DoTDestroyed = () => {
//   const {diceBag, playerOneTotalDice, playerOneRemainingDice} = this.state;

//   if(playerOneTotalDice > 0 && playerOneTotalDice != playerOneRemainingDice ){
//   this.setState({playerOneTotalDice: playerOneTotalDice -1})
//   }
// }

// handleP2DiBDestroyed = () => {
//   const {diceBag, playerTwoTotalDice} = this.state;

//   for(let i = 0; i < diceBag.length; i++){
//     if(diceBag[i] === `${this.props.playerTwo.diceColor}`){
//       diceBag.splice(i,1);
//       this.setState({playerTwoRemainingDice: this.state.playerTwoRemainingDice -1});
//     }
//   }
  
//   if(playerTwoTotalDice >0){
//   this.setState({playerTwoTotalDice: this.state.playerTwoTotalDice - 1, playerTwoRemainingDice: this.state.playerTwoRemainingDice - 1});
//   }
// }

// handleP2DoTDestroyed = () => {
//   const {diceBag, playerTwoTotalDice, playerTwoRemainingDice} = this.state;

//   if(playerTwoTotalDice > 0 && playerTwoTotalDice != playerTwoRemainingDice){
//   this.setState({playerTwoTotalDice: playerTwoTotalDice -1})
//   }
// }

// handleNextTurn = () => {
//   this.setState({
//     turnNum: this.state.turnNum + 1,
//     pulledDice: '',
//     playerTwoRemainingDice: this.state.playerTwoTotalDice,
//     playerOneRemainingDice: this.state.playerOneTotalDice
//   })
//   this.handleDiceTotal()
// }

// handleGameOver = () => {
//   if(this.state.playerOneTotalDice === 0 || this.state.playerTwoTotalDice === 0){
//     this.setState({gameOver: true})
//   }
// }

// handleExit = () => {
//   window.location.reload(false);
// }

// render(){
//   console.log(this.state.diceBag)
//   console.log(this.state.pulledDice)
//   console.log(this.state.gameOver)
  
//   return(
//     <div style={{}}>
//       <Segment.Group style={{margin: '0'}} horizontal>
//         <Segment >
//           <h5 style={{margin: '0'}}>{this.props.playerOne.name} total units:  </h5>  
//           <h2 style={{margin: '0'}}>{this.state.playerOneTotalDice}</h2>
//         </Segment>
//         <Segment>
//           <h5 style={{margin: '0'}}>{this.props.playerOne.name} dice in bag:</h5>
//           <h2 style={{margin: '0'}}>{this.state.playerOneRemainingDice}</h2>
//         </Segment>
//       </Segment.Group>

//       <Segment.Group style={{margin: '0'}} horizontal>
//       <Segment>
//           <h5 style={{margin: '0'}}>{this.props.playerTwo.name} total units:  </h5>  
//           <h2 style={{margin: '0'}}>{this.state.playerTwoTotalDice}</h2>
//         </Segment>
//         <Segment>
//           <h5 style={{margin: '0'}}>{this.props.playerTwo.name} dice in bag:</h5>
//           <h2 style={{margin: '0'}}>{this.state.playerTwoRemainingDice}</h2>
//         </Segment>
//       </Segment.Group>

      

//     <div className='dice-container'>
//     {!this.state.pulledDice ? <p style={{fontSize: '19px', color: 'black', marginLeft:'100px'}}>Draw dice to begin turn!</p> : null}
//     <Transition
//       animation='pulse'
//       duration='500'
//       visible={this.state.transition}>
//     <div className='dice' style={{
//       backgroundColor: `${this.state.pulledDice}`,
//       height: '100px',
//       width: '100px',
//       marginTop: '5px',
//       fontWeight: 'bold',
//       borderRadius: '5px'

      
//       }}>
//       {this.state.pulledDice == this.props.playerOne.diceColor 
//       ?
//       <p style={{fontSize: '19px'}}> {this.props.playerOne.name} </p>
//       :
//       <p style={{fontSize: '19px'}}> {this.props.playerTwo.name} </p>
//       }
//       </div>
//       </Transition>
//       </div>
      
//     <h2 >turn: {this.state.turnNum}</h2>
    
//     <Grid stackable centered style={{width: '100%'}}>
//       <Grid.Row columns={1}>
//     {this.state.diceBag < 1  ? null : 
//     <Button size='huge' onClick={this.handleDiceDraw}>Draw Dice!</Button>
//     }
//     {this.state.diceBag < 1 ? <Button size='huge' color='blue' onClick={this.handleNextTurn}>Next Turn</Button> : null
//     }
//       </Grid.Row>
//     <Button.Group vertical>
//     <Button style={{marginTop: '1px'}} size='big'  color={this.props.playerOne.diceColor} onClick={this.handleRemoveP1Dice}> P1 Ambush/Down</Button>
//     <Button style={{marginTop: '1px'}} size='big' color={this.props.playerOne.diceColor} onClick={this.handleP1DiBDestroyed}>P1 Dice in Bag Destroyed</Button>
//     <Button style={{marginTop: '1px'}} size='big' color={this.props.playerOne.diceColor} onClick={this.handleP1DoTDestroyed}>P1 Dice on table Destroyed</Button>
//     </Button.Group>

//     <Button.Group vertical>
//     <Button style={{marginTop: '1px'}} size='big' color={this.props.playerTwo.diceColor} onClick={this.handleRemoveP2Dice}>P2 Ambush/Down</Button>
//     <Button style={{marginTop: '1px'}} size='big' color={this.props.playerTwo.diceColor} onClick={this.handleP2DiBDestroyed}>P2 Dice in Bag Destroyed</Button>
//     <Button style={{marginTop: '1px'}} size='big' color={this.props.playerTwo.diceColor} onClick={this.handleP2DoTDestroyed}>P2 Dice on table Destroyed</Button>
//     </Button.Group>
    
//     </Grid>

//     <Modal open={this.state.gameOver === true}>
//       <Modal.Content centered>
        
        
//           <Header centered>Game Over!</Header>
//           <Button onClick={this.handleExit}>Exit</Button>
        
//       </Modal.Content>
//     </Modal>
    
    
//     </div>

    
//   )
// }



// }

// export default Dashboard;