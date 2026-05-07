import { render, screen } from "@testing-library/react";
import { FormComponentLabel } from "./FormComponentLabel";

describe('FormComponentLabel', () => {
    it('should render', () => {
        render(<FormComponentLabel id="1" isRequired label="test label" />);
        expect(screen.getByText('test label*')).toBeVisible();
    });
    it('should not render * if not required', () => {
        render(<FormComponentLabel id="1" isRequired={false} label="test label" />);
        expect(screen.queryByText(/\*/)).toBeNull();
    });
});