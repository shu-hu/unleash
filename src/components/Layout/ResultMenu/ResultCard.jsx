import React from 'react';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

import * as resultStyles from './ResultMenu.module.css'


const ResultCard = (props) => {
   return(
       <Card className={resultStyles.root}>
           <CardHeader 
            action={
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            }
            title={props.park.parkName}
            subheader={props.park.address}
           />
           <CardActions>
                <Link 
                    key={props.park._id}
                    className={resultStyles.link}
                    to={`api/parks/details/${props.park._id}`}
                    > 
                    <Button size="small">Details</Button>
                </Link>
           </CardActions>
       </Card>
   )
}

export default ResultCard;