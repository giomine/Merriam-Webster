import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

  const [ randomEntry, setRandomEntry ] = useState(null)
  const randomWordArray = ['chew', 'long', 'truck', 'activity', 'delivery', 'direful', 'hiss', 'tangible', 'big', 'hydrant', 'cheerful', 'outgoing', 'whispering', 'young', 'sleepy', 'mug', 'languid', 'shallow', 'internal', 'sea', 'soak', 'tan', 'steady', 'teaching', 'sulky', 'tricky', 'print', 'fragile', 'scandalous', 'habit', 'destruction', 'overflow', 'scale', 'property', 'fuel', 'satisfying', 'camera', 'observation', 'conversation', 'month', 'spooky', 'nail', 'snakes', 'girl', 'coat', 'mud', 'place', 'deep', 'pig', 'whine', 'pour', 'thought', 'afraid', 'zesty', 'far-flung', 'dog', 'thumb', 'cactus', 'abrupt', 'stormy', 'whip', 'happy', 'book', 'magic', 'receipt', 'preference', 'chivalrous', 'children', 'enchanted', 'light', 'sun', 'fair', 'program', 'name', 'shampoo', 'x-ray', 'family', 'silk', 'airport', 'house', 'vague', 'license', 'tedious', 'general', 'wheel', 'coal', 'fish', 'tapestry', 'soft', 'powerful', 'behavior', 'rule', 'medical', 'thaw', 'sofa', 'flower', 'provide', 'friendly', 'stimulating', 'design', 'brush', 'rich', 'study', 'spectacular', 'show', 'rightful', 'complete', 'outstanding', 'person', 'jar', 'pleasant', 'enchanting', 'walk', 'jeans', 'follow', 'vacuous', 'toothbrush', 'pretty', 'lively', 'stove', 'cold', 'heal', 'present', 'peel', 'wool', 'compare', 'leg', 'appliance', 'messy', 'amount', 'chance', 'toe', 'condition', 'spiral', 'nifty', 'smell', 'station', 'stare', 'cave', 'channel', 'serious', 'stuff']

  useEffect(() => {
    const getRandomWord = async () => {
      const randomNumber = Math.floor(Math.random() * 150)
      const randomWord = randomWordArray[randomNumber]
      try {
        const { data } = await axios.get(`https://www.dictionaryapi.com/api/v3/references/sd4/json/${randomWord}?key=${process.env.REACT_APP_SCHOOL_KEY}`)
        const newData = data.filter(item => item.fl === 'noun' || item.fl === 'adjective')
        setRandomEntry(newData)
        
      } catch (error) {
        console.log(error)
      }
    }
    getRandomWord()
  }, [])

  return (
    <main className="home">
      <div className="hero">
        <div>
          <h1>Choose a dictionary</h1>
          <Button className="homebutton" to="/medical" as={Link}>Medical Dictionary</Button>
          <Button className="homebutton two" to="/school" as={Link}>School Dictionary</Button>
        </div>

        <div>
          <div className='wordofday-container'>
            <h3>Random word:</h3>
            { randomEntry &&
              <div className='wordofday'>
                <p className='wordofdayp'>{randomEntry[0].meta.stems[0].charAt(0).toUpperCase() + randomEntry[0].meta.stems[0].slice(1)}</p>
                <p className='wordofdayp two'>{randomEntry[0].shortdef[0]}</p>
              </div>
            }
          </div>
        </div>

      </div>
    </main>
  )
}

export default Home