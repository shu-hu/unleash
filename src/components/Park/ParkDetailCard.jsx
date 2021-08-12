import React from 'react';
import cx from 'clsx';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import * as ParkStyles from './Park.Module.css'

const ParkDetailCard = (props) => {
    const wideCardMediaStyles = useWideCardMediaStyles();
    const fadeShadowStyles = useFadedShadowStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();
    return (
      <Card className={cx(fadeShadowStyles.root)}>
        <CardMedia
          classes={wideCardMediaStyles}
          image={
            'https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg'
          }
        />
        <CardContent>
          <TextInfoContent
            classes={textCardContentStyles}
            heading={props.parkName}
            body={
              props.address
            }
          />
        </CardContent>
        <Box px={3} pb={3}>

        </Box>
      </Card>
    );
  }

export default ParkDetailCard;