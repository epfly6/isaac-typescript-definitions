#!/bin/bash

set -e # Exit on any errors

# Get the directory of this script
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

REPO_ROOT="$DIR/.."
cd "$REPO_ROOT"

# Make a list of every misspelled word without any custom dictionaries
CSPELL_CONFIGURATION_PATH="$REPO_ROOT/.cspell.json"
CSPELL_CONFIGURATION_PATH_TEMP="$REPO_ROOT/.cspell-temp.json"
mv "$CSPELL_CONFIGURATION_PATH" "$CSPELL_CONFIGURATION_PATH_TEMP" # Otherwise the below command won't work properly
WORDS_PATH="$REPO_ROOT/misspelled-words.txt"
npx cspell lint --config .cspell-base.json --dot --no-progress --no-summary --unique --words-only | sort --ignore-case --unique > "$WORDS_PATH"
mv "$CSPELL_CONFIGURATION_PATH_TEMP" "$CSPELL_CONFIGURATION_PATH"

# Check the custom dictionaries
for DICTIONARY_NAME in isaac isaacscript; do
  DICTIONARY_PATH="$DIR/$DICTIONARY_NAME/$DICTIONARY_NAME.txt"
  TEMP_DICTIONARY_PATH="$DIR/$DICTIONARY_NAME/$DICTIONARY_NAME-temp.txt"

  # Check alphabetically sorted and unique
  echo "Checking dictionary: $DICTIONARY_PATH"
  cat "$DICTIONARY_PATH" | sort --ignore-case --unique > "$TEMP_DICTIONARY_PATH"
  diff "$DICTIONARY_PATH" "$TEMP_DICTIONARY_PATH"
  rm -f "$TEMP_DICTIONARY_PATH"

  # Check that each word in the dictionary is actually being used
  for LINE in $(cat "$DICTIONARY_PATH"); do
    echo "Checking for: $LINE"
    grep "$LINE" "$WORDS_PATH" --ignore-case --quiet
  done

  echo "Dictionary is valid: $DICTIONARY_PATH"
done

# Also check that each ".cspell.json" word is actually being used
echo "Checking CSpell configuration words."
CSPELL_CONFIGURATION_WORDS=$(cat "$CSPELL_CONFIGURATION_PATH" | python -c "import sys, json; print('\n'.join(json.load(sys.stdin)['words']))")
for LINE in $CSPELL_CONFIGURATION_WORDS; do
  LINE_TRIMMED=$(echo "$LINE" | xargs)
  echo "Checking for: $LINE_TRIMMED"
  grep "$LINE_TRIMMED" "$WORDS_PATH" --ignore-case --quiet
done
echo "CSpell configuration words are valid."

rm -f "$WORDS_PATH"
