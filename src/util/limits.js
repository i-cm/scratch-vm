let _limits = true;
let _shouldFence = true;

/**
 * Get whether protective limits should be imposed.
 * @param {?boolean} [shouldFence=false] - Whether to get the sprite fencing limit option
 * @param {?boolean} setTo - If given, it'll set it as well. Bad design yes, but whatever
 */
const limits = (shouldFence = false, setTo = undefined) => {
    if (shouldFence) {
        if (setTo !== undefined) {
            _shouldFence = setTo;
        }
        return _shouldFence;
    } else {
        if (setTo !== undefined) {
            _limits = setTo;
        }
        return _limits;
    }
};

module.exports = limits;
