import React from "react"
import cx from 'clsx'
import CommentActions from './CommentActions'
import CommentUpdateForm from './CommentUpdateForm'

import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'

import Rating from '@material-ui/lab/Rating'
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded'
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing'

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
  
  const convertFeature = (arr) => (
    arr.reduce((acc, feature) => {
        acc.push(featuresConverter[feature])
        return acc
    }, [])
  )
  
  const filterTrueFeatures = (arr) => {
    let array = [];
    arr.map(feature => {
        let featureArr = Object.entries(feature)
        return featureArr.map(feat => (
            feat[1] === true && array.push(feat[0])
        ))
    })
    return convertFeature(array)
}

    return (
        <div className="comment-card">
            <div className="card-header">
            </div>
            {!props.toggleUpdateForm ?
                props.park &&
                <Card elevation={5} style={{ background: '#F6F6FF'}}>
                    <CardContent className={cx(shadowStyles.root)}>
                        <Box className={gutterStyles.parent} display="flex">
                            <h3 style={{ display: 'inline' }}>
                                {props.comment.author?.name}
                            </h3>
                        <Rating name={'rating'} value={props.comment.rating} size={'medium'} disabled/>
                        </Box>

                    <Typography color={'textSecondary'} variant={'body2'}>
                        {props.comment.genComments}
                    </Typography>

                    <Box mt={2} >
                        { filterTrueFeatures(props.comment.features).map((feature, idx) => (
                            <Chip label={feature} key={idx}></Chip>
                        ))}
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
                        <CommentActions
                                toggleUpdateForm={props.toggleUpdateForm}
                                handleToggle={props.handleToggle}
                                {...props}
                            />
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