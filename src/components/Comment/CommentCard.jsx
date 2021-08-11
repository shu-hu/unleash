import React from "react"
import CommentActions from './CommentActions'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import cx from 'clsx'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Rating from '@material-ui/lab/Rating'
import IconButton from '@material-ui/core/IconButton'
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded'
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing'


const CommentCard = (props) => {
  const shadowStyles = useFadedShadowStyles()
  const gutterStyles = usePushingGutterStyles({ firstExcluded: true })
    return (
        <div className="comment-card">
            <div className="card-header">
                <CommentActions
                    toggleUpdateForm={props.toggleUpdateForm}
                    handleToggle={props.handleToggle}
                    {...props}
                />
            </div>
            {!props.toggleUpdateForm &&
                <Card elevation={0}>
                    <CardContent className={cx(shadowStyles.root)}>
                    <h3>{props.comment.author}</h3>
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        mb={1}
                        className={gutterStyles.parent}
                    >
                        <Rating name={'rating'} value={props.comment.rating} size={'small'} />
                        <Typography variant={'body2'}>
                        {props.comment.rating}
                        </Typography>
                    </Box>
                    <Typography color={'textSecondary'} variant={'body2'}>
                        {props.comment.genComments}
                    </Typography>
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
        }
        </div>
    );
}

export default CommentCard