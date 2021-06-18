 <h1 align="center">

# LANGUAGE DETECTOR

</h1>

### Type In a Phrase - and It Detects the Language

Use

1. Clone the repository
2. Run npm install to download all the required dependencies

Some Examples:

- $ node index.js "bonjour, je suis Charle" <br>
  ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `Our Best Language Guess is French`   <br>

- $ node index.js "lakgdts"  <br>
  ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `Sorry, Couldn't guess its language`<br>

- $ node index.js 'Alle menslike wesens word vry' <br>
  ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `Our Best Language Guess is Afrikaans` <br>

- $ node index.js "এটি একটি ভাষা একক IBM স্ক্রিপ্ট"   <br>
  ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `Our Best Language Guess is Bengali` <br>

- $ node index.js "Alle menneske er fødde til fridom" <br>
  ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `Our Best Language Guess is Norwegian Nynorsk` <br>

- $ node index.js "This is the best language" <br>
  ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `Our Best Language Guess is English` <br>

- $ node index.js "यह टमाटर मीठा है" <br>
  ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `Our Best Language Guess is Hindi` <br>

- $ node index.js "Mango is king of fruits" <br>
  ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `Our Best Language Guess is English`  <br>

- $ node index.js "fhwjedfkw cvah zzzzz"  <br>
  ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+)`Sorry, Couldn't guess its language` <br>

  <br>


It also has color coding (green and red) for ease of understanding whether the language could be guessed or not.

Modules Used : <br>
https://github.com/wooorm/franc  <br>
https://github.com/adlawson/nodejs-langs <br>
https://www.npmjs.com/package/colors  <br>
