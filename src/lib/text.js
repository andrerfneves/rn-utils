
/**
 * @name TextHelpers
 * @summary - Singleton class for handling any text related helpers
 * @return {undefined}
 */
export default class TextHelpers {
  /**
   * @name constructor
   * @summary - Method called on initialization of TextHelpers instance
   * @param {object} fontSizes - object containing defined font sizes
   * @param {object} lineHeights - object containing defined line heights
   * @return {undefined}
  */
  constructor(fontSizes, lineHeights) {
    this._fontSizes = fontSizes;
    this._lineHeights = lineHeights;
  }

  /**
   * @name handleError
   * @summary - Generic method for throwing errors
   * @param {string} message - the error message to be thrown
   * @return {undefined}
  */
  handleError(message) {
    throw new Error(message);
  }

  /**
   * @name getLineHeight
   * @summary - Method for returning a line height dependent on passed size argument
   * @param {string} size - desired size of the font and line height
   * @return {object}
  */
  getLineHeight(size) {
    if (typeof size !== 'string') {
      this.handleError('Passed size argument must be a string');
    }

    const lineHeight = this._lineHeights[size];

    if (!lineHeight) {
      this.handleError(`Size ${size} is not a supported line height`);
    }

    return lineHeight;
  }

  /**
   * @name getFontSize
   * @summary - Method for returning a font size dependent on passed size argument
   * @param {string} size - desired size of the font and line height
   * @return {object}
  */
  getFontSize(size) {
    if (typeof size !== 'string') {
      this.handleError('Passed size argument must be a string');
    }

    const fontSize = this._fontSizes[size];

    if (!fontSize) {
      this.handleError(`Size ${size} is not a supported font size`);
    }

    return {
      fontSize,
      lineHeight
    }
  }

  /**
   * @name getFontStyles
   * @summary - Method for returning object containing font size and
   * line height dependent on passed size argument
   * @param {string} size - desired size of the font and line height
   * @return {object}
  */
  getFontStyles(size) {
    return {
      fontSize: this.getFontSize(size),
      lineHeight: this.getLineHeight(size)
    }
  }
}
