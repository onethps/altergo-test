import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { deletePost, fetchPosts } from '../redux/middleware/posts';

const DEFAULT_POSTS_COUNT = 6;
const LOAD_POSTS_COUNT = 6;

export const News = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector((state) => state.posts.posts);
  const status = useAppSelector((state) => state.posts.status);

  const [showButton, setShowButton] = useState(true);
  const [postsCount, setPostsCount] = useState(DEFAULT_POSTS_COUNT);

  const isFetchingOnMount = status === 'loading' && !posts.length;

  const handleLoadMorePosts = () => setPostsCount((prev) => prev + LOAD_POSTS_COUNT);

  const handleDeletePost = (postId: number) => {
    dispatch(deletePost({ postId }));
    // prevent last item in array to show the load button
    setPostsCount(posts.length - 1);
  };

  useEffect(() => {
    dispatch(fetchPosts({ limit: postsCount }))
      .unwrap()
      .then((res) => {
        if (res.length < postsCount) {
          setShowButton(false);
        }
      });
  }, [postsCount]);

  if (isFetchingOnMount) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '300px',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
      {!posts.length && status === 'success' ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            minHeight: '300px',
          }}
        >
          <Typography textAlign="center" variant="h5" sx={{ opacity: 0.5 }}>
            Empty List
          </Typography>
        </Box>
      ) : (
        posts.map((post) => (
          <Card key={post.id} sx={{ width: '350px' }}>
            <CardHeader
              sx={{
                display: 'flex',
                overflow: 'hidden',
                '& .MuiCardHeader-content': {
                  overflow: 'hidden',
                },
              }}
              titleTypographyProps={{ noWrap: true }}
              action={
                <IconButton
                  aria-label="delete button"
                  onClick={() => handleDeletePost(post.id)}
                >
                  <CloseIcon />
                </IconButton>
              }
              title={post.title}
            />

            <CardMedia
              component="img"
              alt="post image"
              height="194"
              src="https://via.placeholder.com/600"
            />

            <CardContent>
              <Typography>{post.body}</Typography>
            </CardContent>
          </Card>
        ))
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {showButton && (
          <Button
            variant="contained"
            onClick={handleLoadMorePosts}
            disabled={status === 'loading'}
          >
            Load More
          </Button>
        )}
      </Box>
    </Box>
  );
};
