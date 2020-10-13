import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBarRoot: {
    backgroundColor: '#1a75ff'
  },
  toolbarRoot: {
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  grow: {
    flexGrow: 1,
  },
  offset: {
    height: '81px'
  },
  searchBarRoot: {
    display: 'flex',
    position: 'relative',
    backgroundColor: '#66a3ff',
    '&:hover': {
      backgroundColor: '#80b3ff'
    },
    marginLeft: '50px',
    borderRadius: '5px',
    height: '40px'
  },
  searchIcon: {
    height: '100%',
    position: 'absolute', 
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    right: 0
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    width: '100%',
    padding: '0 35px 0 10px'
  }
}));

export default useStyles