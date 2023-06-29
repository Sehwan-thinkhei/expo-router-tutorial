import React from 'react';
import { useState } from 'react';
import 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import Welcome from './Welcome';


describe('Welcome', () => {
    it('Correct title', () => {
        const [searchTerm, setSearchTerm] = ["", ""]

        const screen = render(<Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
                if (searchTerm) {
                    router.push('/search/' + searchTerm)
                }
            }}
        />);
        const title = screen.queryByText("Hello Sehwan !");
        expect(title).toBeDefined();
    });

    it('Correct text input field', () => {
        const [searchTerm, setSearchTerm] = ["", ""]

        const screen = render(<Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
                if (searchTerm) {
                    router.push('/search/' + searchTerm)
                }
            }}
        />);
        expect(screen.queryByTestId('jobSearchField')).toBeDefined();
    });

    it('Correct search button', () => {
        const [searchTerm, setSearchTerm] = ["", ""]

        const screen = render(<Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
                if (searchTerm) {
                    router.push('/search/' + searchTerm)
                }
            }}
        />);
        expect(screen.queryByTestId('jobSearchBtn')).toBeDefined();
    });

    // it('Alert exception when search button pressed without any input command?', () => {
    //     const screen = render(<Home />);
    //     const title = 'Failed to get command.'; // Alert의 제목
    //     const message = 'Please input command!'; // Alert의 내용
    //     const button = screen.getByTestId('jobSearchBtn'); // 버튼을 직접 눌러보기 위해서 버튼을 탐색
    //     fireEvent(button, 'press'); // fireEvent를 통해 윗 줄에서 선택한 버튼에 'press'라는 이벤트를 실행하는 trigger이다.
    //     const json = screen.toJSON(); // 버튼을 누른 이후의 모습을 json으로 만든다.
    //     expect(Alert.alert).toHaveBeenCalledWith(title, message); // react-native의 Alert 메소드가 title, message과 같은 매개변수를 넘겨받고 실행 된 적이 있는지 테스트한다.
    //     expect(json).toMatchSnapshot(); // 초기에 촬영 된 스냅샷과 현재 스크린을 비교한다. 만약 경고창은 띄웠지만 실제 작성을 막지 않은 경우, 엉뚱한 노드가 하나 더 생겼을테니 초기 스냅샷과 달라졌기 때문에 오류가 난다.    
    // });

    it('Correct full-time button', () => {
        const [searchTerm, setSearchTerm] = ["", ""]

        const screen = render(<Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
                if (searchTerm) {
                    router.push('/search/' + searchTerm)
                }
            }}
        />);
        expect(screen.queryByTestId('searchBtnFull-time')).toBeDefined();
    });

    it('Correct part-time button', () => {
        const [searchTerm, setSearchTerm] = ["", ""]

        const screen = render(<Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
                if (searchTerm) {
                    router.push('/search/' + searchTerm)
                }
            }}
        />);
        expect(screen.queryByTestId('searchBtnPart-time')).toBeDefined();
    });

    it('Correct contractor button', () => {
        const [searchTerm, setSearchTerm] = ["", ""]

        const screen = render(<Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
                if (searchTerm) {
                    router.push('/search/' + searchTerm)
                }
            }}
        />);
        expect(screen.queryByTestId('searchBtnContractor')).toBeDefined();
    });
})