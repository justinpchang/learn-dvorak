def read_words_from_file(file_path):
    word_array = []
    try:
        with open(file_path, 'r') as file:
            for line in file:
                word = line.strip()
                word_array.append(word)
    except FileNotFoundError:
        print(f"Error: File '{file_path}' not found.")
    return word_array


file_path = './word_lists/top_10k.txt'
words = read_words_from_file(file_path)


def filter_words_by_letters(words, allowed_letters, must_have=None):
    filtered_words = []
    for word in words:
        if all(letter in allowed_letters for letter in word) and (must_have is None or must_have in word) and len(word) > 3:
            filtered_words.append(word)
    return filtered_words


VOWELS = "aeiou"
START_POSITION = "aoeuhtns"
HOME_ROW = "aoeuidhtns"
EXT_0 = "id"
EXT_1 = "cfklmprv"
EXT_2 = "bgjqwxyz"

ret = []

ext = EXT_2

for letter in ext:
    ret += filter_words_by_letters(words, HOME_ROW + letter, letter)[:5]

words = [word for word in words if word not in ret]

ret += filter_words_by_letters(words, VOWELS + ext)[:(100 - len(ret))]

print(ret)
