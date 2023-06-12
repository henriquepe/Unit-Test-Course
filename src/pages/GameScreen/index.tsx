import React, { useEffect } from "react";
import { View, Text, Pressable, Image, TextInput } from "react-native";
import { colors } from "../../global/colors";
import { LinearGradient } from "expo-linear-gradient";
import resetIcon from "../../assets/reset-icon.png";
import { ptLocale } from "../../global/locale";
import { changeHightScoreStyles, styles } from "./styles";

const ONE_POINT = 1;
const TRUCO_POINTS = 3;

const ChangeHightScoreDialog = ({ onPress }) => {
  const [newHightScorePoints, setNewHightScorePoints] = React.useState(0);
  return (
    <View style={changeHightScoreStyles.container}>
      <Text style={changeHightScoreStyles.title}>
        {ptLocale.maximumScoreYouWant}
      </Text>
      <TextInput
        style={changeHightScoreStyles.input}
        onChangeText={(value) => setNewHightScorePoints(Number(value))}
        placeholder="10?"
      />
      <View style={styles.optionButtonsWrapper}>
        <Pressable
          onPress={() => onPress({ dialogStatus: false })}
          style={[styles.optionButton, { backgroundColor: colors.blur }]}
        >
          <Text style={styles.optionButtonText}>{ptLocale.cancel}</Text>
        </Pressable>
        <Pressable
          onPress={() => onPress({ dialogStatus: false, newHightScorePoints })}
          style={styles.optionButton}
        >
          <Text style={styles.optionButtonText}>{ptLocale.save}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export const GameScreen = () => {
  const [hightScore, setHightScore] = React.useState(12);
  const [weGamesPoints, setWeGamesPoints] = React.useState(0);
  const [theyGamesPoints, setTheyGamesPoints] = React.useState(0);
  const [wePoints, setWePoints] = React.useState(0);
  const [theyPoints, setTheyPoints] = React.useState(0);
  const [dialogIsOpen, setDialogIsOpen] = React.useState(false);
  const blurLayer = dialogIsOpen ? true : false;

  const handleResetPoints = () => {
    setWePoints(0);
    setTheyPoints(0);
    setWeGamesPoints(0);
    setTheyGamesPoints(0);
  };

  useEffect(() => {
    if (wePoints >= hightScore) {
      setWeGamesPoints((value) => value + 1);
      setWePoints(0);
      setTheyPoints(0);
    }

    if (theyPoints >= hightScore) {
      setTheyGamesPoints((value) => value + 1);
      setWePoints(0);
      setTheyPoints(0);
    }
  }, [wePoints, theyPoints, hightScore]);

  return (
    <>
      {dialogIsOpen ? (
        <ChangeHightScoreDialog
          onPress={({ dialogStatus, newHightScorePoints }) => {
            if (newHightScorePoints) {
              setHightScore(newHightScorePoints);
            }
            setDialogIsOpen(dialogStatus);
          }}
        />
      ) : null}
      {blurLayer ? (
        <LinearGradient
          style={{
            position: "absolute",
            flex: 1,
            zIndex: 1,
            backgroundColor: "transparent",
            width: "100%",
            height: "100%",
          }}
          colors={[
            colors.layerGradientBackground.start,
            colors.layerGradientBackground.end,
          ]}
        />
      ) : null}
      <LinearGradient
        style={[styles.container]}
        colors={[
          colors.gradientBackground.start,
          colors.gradientBackground.end,
        ]}
      >
        <Text style={styles.title}>{ptLocale.gameTitle}</Text>
        <Text style={styles.subtitle}>
          {ptLocale.gameSubtitle} {"\n"}
          <Text style={styles.subtitleBold}>
            {hightScore} {ptLocale.points}
          </Text>
        </Text>

        <Pressable
          onPress={() => setDialogIsOpen(true)}
          style={styles.changePointsButton}
        >
          <Text style={styles.changePointsButtonText}>
            {ptLocale.changeHightScore}
          </Text>
        </Pressable>

        <View style={styles.smallScoreWrapper}>
          <Text style={styles.smallScoreValue}>
            {weGamesPoints.toString().padStart(2, "0")}
          </Text>
          <View style={styles.smallScoreDivider} />
          <Text style={styles.smallScoreValue}>
            {theyGamesPoints.toString().padStart(2, "0")}
          </Text>
        </View>

        <View style={styles.scoreWrapper}>
          <Text style={styles.scoreValue}>
            {wePoints.toString().padStart(2, "0")}
          </Text>
          <View style={styles.scoreDivider} />
          <Text style={styles.scoreValue}>
            {theyPoints.toString().padStart(2, "0")}
          </Text>
        </View>

        <View style={styles.scoreValueIdentifierWrapper}>
          <Text style={styles.scoreValueIdentifier}>{ptLocale.we}</Text>
          <Pressable onPress={handleResetPoints}>
            <Image style={{ width: 18, height: 20 }} source={resetIcon} />
          </Pressable>
          <Text style={styles.scoreValueIdentifier}>{ptLocale.they}</Text>
        </View>

        <View style={[styles.counterButtonsWrapper, { marginTop: 47 }]}>
          <Pressable
            onPress={() => setWePoints((value) => value + ONE_POINT)}
            style={styles.counterButton}
          >
            <Text style={styles.counterButtonText}>{ptLocale.plusOne}</Text>
          </Pressable>
          <Pressable
            onPress={() => setTheyPoints((value) => value + ONE_POINT)}
            style={styles.counterButton}
          >
            <Text style={styles.counterButtonText}>{ptLocale.plusOne}</Text>
          </Pressable>
        </View>
        <View style={styles.counterButtonsWrapper}>
          <Pressable
            onPress={() =>
              setWePoints((value) => (value > 0 ? value - ONE_POINT : value))
            }
            style={styles.counterButton}
          >
            <Text style={styles.counterButtonText}>{ptLocale.lessOne}</Text>
          </Pressable>
          <Pressable
            onPress={() =>
              setTheyPoints((value) => (value > 0 ? value - ONE_POINT : value))
            }
            style={styles.counterButton}
          >
            <Text style={styles.counterButtonText}>{ptLocale.lessOne}</Text>
          </Pressable>
        </View>
        <View style={styles.counterButtonsWrapper}>
          <Pressable
            onPress={() => setWePoints((value) => value + TRUCO_POINTS)}
            style={styles.counterButton}
          >
            <Text style={styles.counterButtonText}>{ptLocale.truco}</Text>
          </Pressable>
          <Pressable
            onPress={() => setTheyPoints((value) => value + TRUCO_POINTS)}
            style={styles.counterButton}
          >
            <Text style={styles.counterButtonText}>{ptLocale.truco}</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </>
  );
};
