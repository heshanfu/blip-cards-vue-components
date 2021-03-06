import editSvg from '../assets/img/Edit.svg'
import approveSvg from '../assets/img/Approve.svg'
import closeSvg from '../assets/img/Close.svg'
import closeBlueSvg from '../assets/img/CloseBlue.svg'
import plusSvg from '../assets/img/plus.svg'
import trashSvg from '../assets/img/Trash.svg'
import checkSentSvg from '../assets/img/CheckSent.svg'
import doubleCheckReceivedSvg from '../assets/img/DoubleCheckReceived.svg'
import doubleCheckReadSvg from '../assets/img/DoubleCheckRead.svg'

// define um objeto mixin
var baseComponent = {
  props: {
    document: {
      type: Object
    },
    position: {
      type: String,
      default: 'left'
    },
    date: {
      type: String
    },
    onSave: {
      type: Function
    },
    onDeleted: {
      type: Function
    },
    onCancel: {
      type: Function
    },
    editable: {
      type: Boolean,
      default: false
    },
    deletable: {
      type: Boolean,
      default: false
    },
    editing: {
      type: Boolean
    }
  },
  watch: {
    editing: function() {
      this.isEditing = this.editing
    }
  },
  data: function() {
    return {
      isEditing: this.editing || false,
      editSvg,
      approveSvg,
      closeSvg,
      closeBlueSvg,
      plusSvg,
      trashSvg,
      checkSentSvg,
      doubleCheckReadSvg,
      doubleCheckReceivedSvg
    }
  },
  created() {
    if (this.init) {
      this.init()
    }
  },
  methods: {
    toggleEdit: function() {
      this.isEditing = !this.isEditing
    },
    trash: function(document) {
      if (this.onDeleted) {
        this.onDeleted(document)
      }
    },
    cancel() {
      this.isEditing = false

      if (this.init) {
        this.init()
      }

      if (this.onCancel) {
        this.onCancel()
      }
    },
    save: function(document) {
      this.isEditing = false

      if (this.onSave) {
        this.onSave(document)
      }
    }
  }
}

export default baseComponent
