import { ReactNode } from 'react';
import { Button, Text } from '@tarojs/components';
import classNames from 'classnames';

// class CommonButton extends Component {
//   static options = {
//     addGlobalClass: true,
//   };

//   click() {
//     const { onClick, disabled } = this.props;
//     if (onClick && !disabled) {
//       onClick();
//     }
//   }

//   render() {
//     const {
//       name,
//       children,
//       renderRight = null,
//       isTranslate = false,
//       disabled = false,
//       className,
//       formType = '',
//       tips,
//       buttonClassName,
//     } = this.props;
//     return (
//       <Button
//         onClick={this.click.bind(this)}
//         formType={formType}
//         className={classNames(
//           !tips ? 'flex-align-justify' : 'flex-align-justify-column',
//           isTranslate ? 'common-translate-button' : 'common-button',
//           disabled ? 'common-disabled-button' : '',
//           isTranslate && disabled ? 'common-disabled-translate' : '',
//           className,
//         )}
//       >
//         {
//           children //拓展文字左边
//         }
//         <Text className={classNames('button-name', buttonClassName)}>{name}</Text>
//         {tips && <Text style={{ fontSize: '11px' }}>{tips}</Text>}
//         {
//           renderRight //拓展文字右边
//         }
//       </Button>
//     );
//   }
// }
interface Props {
  name?: string;
  children?: ReactNode;
  renderRight?: ReactNode;
  isTranslate?: boolean;
  disabled?: boolean;
  className?: string;
  formType?: 'submit' | 'reset';
  tips?: string;
  buttonClassName?: string;
  onClick?: () => void;
}

const CommonButton = (props: Props) => {
  const {
    name,
    children,
    renderRight = null,
    isTranslate = false,
    disabled = false,
    className,
    formType = 'submit',
    tips,
    buttonClassName,
  } = props;
  const click = () => {
    const { onClick, disabled } = props;
    if (onClick && !disabled) {
      onClick();
    }
  };
  return (
    <Button
      onClick={click}
      formType={formType}
      className={classNames(
        !tips ? 'flex-align-justify' : 'flex-align-justify-column',
        isTranslate ? 'common-translate-button' : 'common-button',
        disabled ? 'common-disabled-button' : '',
        isTranslate && disabled ? 'common-disabled-translate' : '',
        className,
      )}
    >
      {
        children //拓展文字左边
      }
      <Text className={classNames('button-name', buttonClassName)}>{name}</Text>
      {tips && <Text style={{ fontSize: '11px' }}>{tips}</Text>}
      {
        renderRight //拓展文字右边
      }
    </Button>
  );
};

export default CommonButton;
