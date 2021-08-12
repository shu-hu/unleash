import React from 'react';
import {useHistory} from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Button from '@material-ui/core/Button'
import { createParkFromApi } from '../../../services/parkService'

import * as resultStyles from './ResultMenu.module.css'


const ResultCard = ({park}) => {
    const history = useHistory()

    const handleClickDetails = async () => {
        const parkId = await createParkFromApi(park)
        history.push(`/api/parks/details/${parkId}`)
    }
    
   return(
       <Card className={resultStyles.root}>
           <CardHeader 
            action={
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            }
            title={park.parkName}
            subheader={park.address}
           />
           <CardActions>
                    <Button size="small" onClick={handleClickDetails}>Details</Button>
           </CardActions>
       </Card>
   )
}

export default ResultCard;