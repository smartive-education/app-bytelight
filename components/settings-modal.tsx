import {
  Button,
  CancelIcon,
  CheckmarkIcon,
  EyeIcon,
  Heading2,
  Input,
  InputWithIcon,
  Label,
  Modal,
  Textarea,
} from '@smartive-education/design-system-component-library-bytelight';
import { FC } from 'react';

type Props = {
  onClose: () => void;
  onInputHandler: (input: string) => void;
};

export const SettingsModal: FC<Props> = ({ onClose, onInputHandler }) => (
  <Modal onClose={onClose} title="Settings">
    <div className="flex flex-col px-l pb-l gap-y-xs">
      <Heading2>Einstellungen</Heading2>
      <Input placeholder="" label="Name Vorname" labelVariant="S" onInput={onInputHandler} />
      <Input placeholder="" label="E-Mail" labelVariant="S" onInput={onInputHandler} />
      <Input placeholder="" label="Ortschaft" labelVariant="S" onInput={onInputHandler} />
      <Label variant="S">Bio</Label>
      <Textarea placeholder="" onTextareaChange={onInputHandler} />
      <div className="flex flex-col mb-xxl gap-y-xs">
        <Heading2>Passwort ändern</Heading2>
        <InputWithIcon
          icon={<EyeIcon size="16" />}
          placeholder=""
          label="Altes Passwort"
          labelVariant="S"
          onInput={onInputHandler}
          isPasswordInput
        />
        <InputWithIcon
          icon={<EyeIcon size="16" />}
          placeholder=""
          label="Neues Passwort"
          labelVariant="S"
          onInput={onInputHandler}
          isPasswordInput
        />
      </div>
      <div className="flex gap-x-s">
        <Button as="button" variant="secondary" onClick={onClose}>
          <div className="flex items-center justify-center gap-x-xs">
            Abbrechen <CancelIcon size="16" />
          </div>
        </Button>
        <Button as="button">
          <div className="flex items-center justify-center gap-x-xs">
            Speichern <CheckmarkIcon size="16" />
          </div>
        </Button>
      </div>
    </div>
  </Modal>
);
