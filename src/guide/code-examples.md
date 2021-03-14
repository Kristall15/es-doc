# Руководства с примерами кода

[[toc]]

## Включение режима разработчика

Будут доступны команды:

- `Shift + D` - меню разработчика
- `Shift + O` - консоль

::: warning
Для того чтобы игра распознала сочетания клавиш, нужно переключиться на **латинскую раскладку клавиатуры**.
:::

```renpy
init:
    $ config.developer = True
```

## Автоматическое объявление файлов

Данный отрезок кода автообъявляет все изображения и звуки вашего мода, опираясь на его идентификатор. Поддерживается автообъявление "цельных" спрайтов.

::: tip
"Цельным" спрайтом называется спрайт, у которого тело, одежда, эмоция и прочее идёт одним изображением, а не каждая часть спрайта отдельно, как в БЛ.
:::

В данном отрезке кода необходимо присвоить:

1. Переменной `MOD_ID` идентификатор мода (см. [Объявление мода](/guide/#объявление-мода))
2. Переменной `MOD_NAME` имя мода
3. Переменной `COLOR_SPRITES` значение `True`, если хотите раскрашивать спрайты в зависимости от времени суток.

::: warning
Для того, чтобы пункт 3 сработал, нужно хранить спрайты в папке `sprites`.
:::

```renpy
init python:
    from os import path

    MOD_ID = ""
    MOD_NAME = ""
    COLOR_SPRITES = False # True

    for file in renpy.list_files():
        if MOD_ID in file:
            file_name = path.splitext(path.basename(file))[0]
            file_split = file.split("/")

            if file.endswith((".png", ".jpg")):
                if "sprites" in file_split:
                    renpy.image(
                        file_name,
                        ConditionSwitch(
                            "persistent.sprite_time == 'sunset'",
                            im.MatrixColor(
                                file,
                                im.matrix.tint(0.94, 0.82, 1.0)
                            ),
                            "persistent.sprite_time == 'night'",
                            im.MatrixColor(
                                file,
                                im.matrix.tint(0.63, 0.78, 0.82)
                            ),
                            True,
                            file
                        )
                    )
                else:
                    renpy.image(file_name, file)
            elif file.endswith((".wav", ".mp2", ".mp3", ".ogg", ".opus")):
                globals()[file_name] = file
```

## Продолжение проигрывания с момента остановки

Данный отрезок позволяет приостановить приостановить проигрыш музыки или звука на определённом отрезке, чтобы позже можно было её снова воспроизвести с места остановки.

```renpy
init python:
    class PlayerPause:
        def __init__(self, channel="music", fadein=2):
            self.channel = channel
            self.fadein = fadein
            self.time = 0
            self.file = renpy.music.get_playing(channel)
        def pause(self, fadeout=2):
            self.time = renpy.music.get_pos(self.channel)
            renpy.music.stop(self.channel, fadeout)
        def resume(self, fadein=2):
            renpy.music.play("<from {}>{}".format(self.time, self.file), fadein=fadein)
        def getFile(self):
            return self.file
        def getTime(self):
            return self.time
```

Пример использования:

```renpy
label test:
    "Запуск проигрывания музыки..."
    play music music_list["lets_be_friends"]
    "Создание класса..."
    $ player = PlayerPause("music") # Присваиваем переменной "player" класс "PlayerPause" для канала "music".
    "Пауза..."
    $ player.pause(3) # Приостанавливаем воспроизведение.
    "Что-то происходит в сценарии..."
    "Продолжение..."
    $ player.resume(2) # Возобновляем произведение с места остановки, с входом музыки (fadein) в 2 секунды
    # $ renpy.music.play("<from {}>{}".format(player.getTime(), player.getFile()), fadein=3)
    "Аудио будет воспроизведено с момента остановки..."
    return
```
