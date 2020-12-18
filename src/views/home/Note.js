export function Note(props) {
  const creacteClassName = (currentNote) => {
    if (props.currentNote === currentNote) {
      return "btn btn-primary";
    }
    return "btn btn-default";
  };
  return [1, 2, 3, 4, 5].map((currentNote) => (
    <button
      type="button"
      key={currentNote}
      className={creacteClassName(currentNote)}
      onClick={() => props.onChangeNote(currentNote)}
    >
      {currentNote}
    </button>
  ));
}
