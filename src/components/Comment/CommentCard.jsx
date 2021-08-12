import React from "react"
import cx from 'clsx'
import CommentActions from './CommentActions'
import CommentUpdateForm from './CommentUpdateForm'

import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CardContent from '@material-ui/core/CardContent'

import Rating from '@material-ui/lab/Rating'
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded'
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing'
import { Data } from "@react-google-maps/api"

const featuresConverter = {
    'fullyFenced': 'Partially Fenced', 
    'partFenced': 'Partially Fenced', 
    'offLeash': 'Off-Leash Area', 
    'smDogArea': 'Small Dog Friendly', 
    'agility': 'Agility', 
    'swimming': 'Swimming', 
    'dogWater': 'Drinking Water', 
    'washStation': 'Wash Station',
    'pooBags': 'Poo Bags',
    'trash': 'Trash',
    'restrooms': 'Restrooms'
} 





const CommentCard = (props) => {
  const shadowStyles = useFadedShadowStyles()
  const gutterStyles = usePushingGutterStyles({ firstExcluded: true })

  const convertFeatureTest = (arr) => {
    let newArr = []
    arr.map(feature => {
        newArr.push(featuresConverter[feature])
    })
return newArr
}
  
  const filterTrueFeatures = (arr) => {
    let array = []
    arr.map(feature => {
        let featureArr = Object.entries(feature)
        return featureArr.map((feat, idx) => (
            feat[1] === true && array.push(feat[0])
        ))
    })
    return convertFeatureTest(array)
}



    return (
        <div className="comment-card">
            <div className="card-header">
            </div>
            {!props.toggleUpdateForm ?
                <Card elevation={5} style={{ background: '#F6F6FF'}}>
                    <CardContent className={cx(shadowStyles.root)}>
                        <Box className={gutterStyles.parent}>
                        <h3 style={{ display: 'inline' }}>{props.comment.author}</h3>
                            <CommentActions
                                toggleUpdateForm={props.toggleUpdateForm}
                                handleToggle={props.handleToggle}
                                {...props}
                            />
                        </Box>
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        mb={1}
                        className={gutterStyles.parent}
                    >
                        <Rating name={'rating'} value={props.comment.rating} size={'small'} disabled/>
                        <Typography variant={'body2'}>
                        {props.comment.rating}
                        </Typography>
                    </Box>
                    <Typography color={'textSecondary'} variant={'body2'}>
                        {props.comment.genComments}
                    </Typography>

                    <Box mt={2} >
                        { filterTrueFeatures(props.comment.features).map((feature, idx) => (
                            <Chip label={feature} key={idx}></Chip>
                        ))
                        }
                    </Box>

                    <Box
                        mt={2}
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >
                        <Box
                        display={'flex'}
                        alignItems={'center'}
                        className={gutterStyles.parent}
                        >
                        <Typography
                            component={'span'}
                            variant={'body2'}
                            color={'textSecondary'}
                        >
                            { props.comment.likes &&
                                `Likes: ${props.comment.likes}`
                            }
                            <br/>
                            { props.comment.dislikes && 
                                `Dislikes: ${props.comment.dislikes}`
                            }
                        </Typography>
                        </Box>
                        <IconButton size={'small'}>
                            <MoreHoriz />
                        </IconButton>
                    </Box>
                    </CardContent>
              </Card>
              :
              props.comment.editing && 
              <CommentUpdateForm {...props} />
            }
        </div>
    );
}

export default CommentCard